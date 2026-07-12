/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171148",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 530.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    }
  ],
  "name": "Soup, chunky chicken noodle, canned, ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 4.46,
    "energy_kcal": 41.0,
    "fat_g": 1.16,
    "fibre_g": 0.8,
    "folate_ug": 9.0,
    "iron_mg": 0.35,
    "magnesium_mg": 7.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 36.0,
    "potassium_mg": 117.0,
    "protein_g": 3.09,
    "salt_g": 0.765,
    "sat_fat_g": 0.627,
    "sodium_mg": 306.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171148",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "meat-and-poultry",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
