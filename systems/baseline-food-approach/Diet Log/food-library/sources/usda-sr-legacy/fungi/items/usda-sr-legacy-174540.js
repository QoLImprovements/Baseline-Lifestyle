/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174540",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    }
  ],
  "name": "Soup, cream of mushroom, canned, prepared with equal volume low fat (2%) milk",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 5.76,
    "energy_kcal": 65.0,
    "fat_g": 3.58,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 0.1,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 103.0,
    "protein_g": 2.36,
    "salt_g": 0.8925,
    "sat_fat_g": 1.12,
    "sodium_mg": 357.0,
    "sugar_g": 2.82,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174540",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "fungi",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
