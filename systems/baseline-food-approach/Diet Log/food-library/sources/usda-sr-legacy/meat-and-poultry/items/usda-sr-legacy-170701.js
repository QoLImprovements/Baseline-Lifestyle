/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-1-10-per-pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170701",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "slice-1-10-per-pizza",
      "kind": "unit",
      "label": "slice 1/10 per pizza"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "slice-1-8-per-pizza",
      "kind": "unit",
      "label": "slice 1/8 per pizza"
    }
  ],
  "name": "School Lunch, pizza, BIG DADDY'S LS 16\" 51% Whole Grain Rolled Edge Turkey Pepperoni Pizza, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 27.4,
    "energy_kcal": 248.0,
    "fat_g": 9.33,
    "fibre_g": 4.1,
    "folate_ug": 0.0,
    "iron_mg": 2.4,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 290.0,
    "potassium_mg": 293.0,
    "protein_g": 13.6,
    "salt_g": 1.125,
    "sat_fat_g": 3.99,
    "sodium_mg": 450.0,
    "sugar_g": 3.83,
    "vitamin_a_ug": 244.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170701",
  "state": "Frozen",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "frozen",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
