/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cup",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-171654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 9.7,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Cereals, corn grits, white, regular and quick, enriched, dry",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 79.1,
    "energy_kcal": 1550.0,
    "fat_g": 1.75,
    "fibre_g": 4.6,
    "folate_ug": 171.0,
    "iron_mg": 3.05,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 141.0,
    "protein_g": 7.65,
    "salt_g": 0.0025,
    "sat_fat_g": 0.34,
    "sodium_mg": 1.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171654",
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
