/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-172090",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 269.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Beef macaroni with tomato sauce, frozen entree, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 18.0,
    "energy_kcal": 475.0,
    "fat_g": 1.96,
    "fibre_g": 1.4,
    "folate_ug": 31.0,
    "iron_mg": 1.3,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 202.0,
    "protein_g": 5.89,
    "salt_g": 0.445,
    "sat_fat_g": 0.443,
    "sodium_mg": 178.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.65,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172090",
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
