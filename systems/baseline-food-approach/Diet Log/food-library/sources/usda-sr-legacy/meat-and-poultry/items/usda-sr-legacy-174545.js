/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-1-cup",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-174545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    }
  ],
  "name": "Soup, HEALTHY CHOICE Chicken Noodle Soup, canned",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 5.2,
    "energy_kcal": 41.0,
    "fat_g": 0.63,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.69,
    "salt_g": 0.4875,
    "sat_fat_g": 0.4,
    "sodium_mg": 195.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 568.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174545",
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
