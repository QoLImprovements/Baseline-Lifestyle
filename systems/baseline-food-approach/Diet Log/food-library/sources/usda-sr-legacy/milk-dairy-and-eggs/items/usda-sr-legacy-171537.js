/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-cup-4-fl-oz",
  "description": "Soups, Sauces, and Gravies",
  "id": "usda-sr-legacy-171537",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup-4-fl-oz",
      "kind": "unit",
      "label": "0.5 cup (4 fl oz)"
    },
    {
      "gramsPerUnit": 305.0,
      "key": "can-10-75-oz",
      "kind": "unit",
      "label": "can (10.75 oz)"
    }
  ],
  "name": "Soup, cream of asparagus, canned, condensed",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 8.52,
    "energy_kcal": 69.0,
    "fat_g": 3.26,
    "fibre_g": 0.4,
    "folate_ug": 19.0,
    "iron_mg": 0.64,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 138.0,
    "protein_g": 1.82,
    "salt_g": 1.6725,
    "sat_fat_g": 0.82,
    "sodium_mg": 669.0,
    "sugar_g": 0.72,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 22.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171537",
  "state": "Canned",
  "subcategory": "Soups, Sauces, and Gravies",
  "tags": [
    "canned",
    "milk-dairy-and-eggs",
    "soups-sauces-and-gravies"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
