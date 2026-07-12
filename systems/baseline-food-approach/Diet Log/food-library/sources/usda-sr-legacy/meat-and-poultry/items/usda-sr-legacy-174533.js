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
  "id": "usda-sr-legacy-174533",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, bean & ham, canned, reduced sodium, prepared with water or ready-to-serve",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 13.7,
    "energy_kcal": 338.0,
    "fat_g": 1.03,
    "fibre_g": 4.0,
    "folate_ug": 29.0,
    "iron_mg": 1.02,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 158.0,
    "protein_g": 4.19,
    "salt_g": 0.4675,
    "sat_fat_g": 0.252,
    "sodium_mg": 187.0,
    "sugar_g": 3.17,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174533",
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
