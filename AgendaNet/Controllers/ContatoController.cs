using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using AgendaNet.DB;
using AgendaNet.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AgendaNet.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ContatoController : Controller
    {
        private DatabaseContext _context;

        public ContatoController(DatabaseContext context)
        {
            _context = context;
            if (!_context.Contatos.Any())
            {
                _context.Contatos.Add(new Contato
                {
                    Nome = "Fulano de Tal",
                    Empresa = "Puppy Co",
                    Cargo = "Auxiliar Administrativo",
                    Email = "fulanodetal@puppyco.com.br",
                    Telefone = "3456 7899"
                });
                _context.SaveChanges();
            }
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Contato> Get()
        {
            return _context.Contatos;
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var contato = _context.Contatos.FirstOrDefault(c => c.Id == id);
            if(contato == null)
            {
                return NotFound("Contato não encontrado");
            }

            return Ok(contato);
        }

        // POST api/<controller>
        [HttpPost]
        public IActionResult Post([FromBody]Contato contato)
        {
            if (contato == null)
            {
                return BadRequest();
            }

            _context.Contatos.Add(contato);
            _context.SaveChanges();

            return Ok("Contato cadastrado");

        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Contato contato)
        {
            if (contato == null || contato.Id != id)
            {
                return BadRequest();
            }

            var _contato = _context.Contatos.FirstOrDefault(c => c.Id == id);
            if(_contato == null)
            {
                return NotFound("Contato não encontrado");
            }

            _contato.Nome = contato.Nome;
            _contato.Empresa = contato.Empresa;
            _contato.Cargo = contato.Cargo;
            _contato.Email = contato.Email;
            _contato.Telefone = contato.Telefone;

            _context.Contatos.Update(_contato);
            _context.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var _contato = _context.Contatos.FirstOrDefault(c => c.Id == id);
            if (_contato == null)
            {
                return NotFound();
            }

            _context.Contatos.Remove(_contato);
            _context.SaveChanges();

            return new NoContentResult();
        }
    }
}
