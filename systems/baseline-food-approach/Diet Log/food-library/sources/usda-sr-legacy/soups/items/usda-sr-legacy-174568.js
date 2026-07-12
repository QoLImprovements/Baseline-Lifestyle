/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174568",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.7,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    }
  ],
  "name": "Soup, onion, dry, mix, prepared with water",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 2.77,
    "energy_kcal": 12.0,
    "fat_g": 0.01,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 0.05,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 31.0,
    "protein_g": 0.32,
    "salt_g": 0.865,
    "sat_fat_g": 0.004,
    "sodium_mg": 346.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174568",
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
