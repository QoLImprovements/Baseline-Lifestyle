/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 283.0,
      "key": "can",
      "kind": "unit",
      "label": "can"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Sauce, enchilada, red, mild, ready to serve",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 4.87,
    "energy_kcal": 126.0,
    "fat_g": 0.91,
    "fibre_g": 0.5,
    "folate_ug": 5.0,
    "iron_mg": 0.67,
    "magnesium_mg": 6.0,
    "omega3_g": 0.029,
    "phosphorus_mg": 11.0,
    "potassium_mg": 101.0,
    "protein_g": 0.62,
    "salt_g": 1.3675,
    "sat_fat_g": 0.111,
    "sodium_mg": 547.0,
    "sugar_g": 1.83,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174074",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "condiments-and-sauces",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
