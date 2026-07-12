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
  "id": "usda-sr-legacy-172910",
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
  "name": "Soup, chicken with rice, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 2.92,
    "energy_kcal": 102.0,
    "fat_g": 0.78,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 0.31,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 41.0,
    "protein_g": 1.45,
    "salt_g": 0.595,
    "sat_fat_g": 0.185,
    "sodium_mg": 238.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172910",
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
