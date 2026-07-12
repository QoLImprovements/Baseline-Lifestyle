/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece-3-2-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170704",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "piece-3-2-oz",
      "kind": "unit",
      "label": "piece 3.2 oz"
    }
  ],
  "name": "School Lunch, pizza, TONY'S Breakfast Pizza Sausage, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 176.0,
    "carbs_g": 27.0,
    "energy_kcal": 1000.0,
    "fat_g": 10.0,
    "fibre_g": 2.0,
    "folate_ug": 0.0,
    "iron_mg": 2.1,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 229.0,
    "protein_g": 10.4,
    "salt_g": 1.5,
    "sat_fat_g": 3.47,
    "sodium_mg": 600.0,
    "sugar_g": 5.87,
    "vitamin_a_ug": 395.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170704",
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
