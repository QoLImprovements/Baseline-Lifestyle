/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "0-25-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174630",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "0-25-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.25 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, hominy grits, white, regular, dry",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 79.2,
    "energy_kcal": 361.0,
    "fat_g": 1.6,
    "fibre_g": 1.6,
    "folate_ug": 205.0,
    "iron_mg": 4.42,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 137.0,
    "protein_g": 8.8,
    "salt_g": 0.0025,
    "sat_fat_g": 0.15,
    "sodium_mg": 1.0,
    "sugar_g": 0.64,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174630",
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
