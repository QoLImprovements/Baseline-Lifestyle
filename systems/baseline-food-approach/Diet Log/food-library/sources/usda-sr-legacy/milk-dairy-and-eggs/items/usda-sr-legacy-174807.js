/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174807",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Soup, egg drop, Chinese restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 4.29,
    "energy_kcal": 114.0,
    "fat_g": 0.61,
    "fibre_g": 0.4,
    "folate_ug": 7.0,
    "iron_mg": 0.26,
    "magnesium_mg": 2.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 15.0,
    "potassium_mg": 22.0,
    "protein_g": 1.16,
    "salt_g": 0.925,
    "sat_fat_g": 0.166,
    "sodium_mg": 370.0,
    "sugar_g": 0.09,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 6.5,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174807",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "milk-dairy-and-eggs",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
