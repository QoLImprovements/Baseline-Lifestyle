/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 265.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup 8 fl oz"
    }
  ],
  "name": "Soup, tomato, dry, mix, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 7.17,
    "energy_kcal": 158.0,
    "fat_g": 0.61,
    "fibre_g": 0.4,
    "folate_ug": 11.0,
    "iron_mg": 0.18,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 111.0,
    "protein_g": 0.93,
    "salt_g": 0.89,
    "sat_fat_g": 0.286,
    "sodium_mg": 356.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174569",
  "state": "Unspecified",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "soups",
    "soups-sauces-and-gravies",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
