/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "piece",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-173346",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Chicken tenders, breaded, frozen, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 14.9,
    "energy_kcal": 1000.0,
    "fat_g": 13.6,
    "fibre_g": 1.7,
    "folate_ug": 28.0,
    "iron_mg": 0.84,
    "magnesium_mg": 29.0,
    "omega3_g": 0.343,
    "phosphorus_mg": 200.0,
    "potassium_mg": 281.0,
    "protein_g": 14.6,
    "salt_g": 1.3175,
    "sat_fat_g": 2.44,
    "sodium_mg": 527.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 2.22,
    "vitamin_k_ug": 17.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173346",
  "state": "Frozen",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "frozen",
    "meals-entrees-and-side-dishes",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
