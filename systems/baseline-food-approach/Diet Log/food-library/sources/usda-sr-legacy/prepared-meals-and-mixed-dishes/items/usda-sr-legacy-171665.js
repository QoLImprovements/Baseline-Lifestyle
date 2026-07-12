/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-25-cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "0-33-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.33 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals, WHEATENA, dry",
  "nutritionPerBasis": {
    "calcium_mg": 500.0,
    "carbs_g": 75.6,
    "energy_kcal": 1490.0,
    "fat_g": 2.9,
    "fibre_g": 12.8,
    "folate_ug": 59.0,
    "iron_mg": 3.57,
    "magnesium_mg": 130.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 384.0,
    "potassium_mg": 492.0,
    "protein_g": 13.1,
    "salt_g": 0.0325,
    "sat_fat_g": 0.43,
    "sodium_mg": 13.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.44,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171665",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
