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
  "id": "usda-sr-legacy-171593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "serving-1-cup",
      "kind": "unit",
      "label": "serving 1 cup"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Soup, chicken noodle, low sodium, canned, prepared with equal volume water",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 2.95,
    "energy_kcal": 25.0,
    "fat_g": 0.95,
    "fibre_g": 0.2,
    "folate_ug": 8.0,
    "iron_mg": 0.66,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 22.0,
    "protein_g": 1.27,
    "salt_g": 0.4325,
    "sat_fat_g": 0.262,
    "sodium_mg": 173.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171593",
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
