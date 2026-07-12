/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173010",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 194.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "3-tablespoon-1-serving",
      "kind": "unit",
      "label": "3 tablespoon (1 serving)"
    },
    {
      "gramsPerUnit": 13.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Cereals, CREAM OF WHEAT, 1 minute cook time, dry",
  "nutritionPerBasis": {
    "calcium_mg": 801.0,
    "carbs_g": 72.6,
    "energy_kcal": 359.0,
    "fat_g": 1.47,
    "fibre_g": 4.4,
    "folate_ug": 0.0,
    "iron_mg": 29.8,
    "magnesium_mg": 45.0,
    "omega3_g": 0.048,
    "phosphorus_mg": 167.0,
    "potassium_mg": 151.0,
    "protein_g": 11.8,
    "salt_g": 0.0175,
    "sat_fat_g": 0.295,
    "sodium_mg": 7.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173010",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
