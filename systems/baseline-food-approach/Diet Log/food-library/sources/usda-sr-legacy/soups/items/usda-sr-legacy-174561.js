/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "serving-1-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174561",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 259.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    },
    {
      "gramsPerUnit": 32.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Soup, pea, green, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 9.88,
    "energy_kcal": 61.0,
    "fat_g": 1.09,
    "fibre_g": 1.9,
    "folate_ug": 1.0,
    "iron_mg": 0.73,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 47.0,
    "potassium_mg": 71.0,
    "protein_g": 3.2,
    "salt_g": 0.84,
    "sat_fat_g": 0.524,
    "sodium_mg": 336.0,
    "sugar_g": 3.19,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174561",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "soups",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
