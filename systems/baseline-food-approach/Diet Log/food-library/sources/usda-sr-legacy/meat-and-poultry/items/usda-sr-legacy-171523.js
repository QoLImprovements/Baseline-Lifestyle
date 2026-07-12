/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171523",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving-3-oz",
      "kind": "unit",
      "label": "serving (3 oz)"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "wing",
      "kind": "unit",
      "label": "wing"
    }
  ],
  "name": "Chicken, broilers or fryers, rotisserie, original seasoning, wing, meat and skin, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 0.04,
    "energy_kcal": 266.0,
    "fat_g": 18.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.97,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 258.0,
    "potassium_mg": 296.0,
    "protein_g": 24.3,
    "salt_g": 1.525,
    "sat_fat_g": 4.81,
    "sodium_mg": 610.0,
    "sugar_g": 0.04,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171523",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
