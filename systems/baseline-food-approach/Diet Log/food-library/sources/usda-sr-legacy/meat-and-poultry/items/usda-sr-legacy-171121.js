/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171121",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Chicken, broilers or fryers, rotisserie, original seasoning, wing, meat only, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.0,
    "energy_kcal": 822.0,
    "fat_g": 9.53,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.97,
    "magnesium_mg": 24.0,
    "omega3_g": 0.059,
    "phosphorus_mg": 264.0,
    "potassium_mg": 322.0,
    "protein_g": 27.7,
    "salt_g": 1.8125,
    "sat_fat_g": 2.22,
    "sodium_mg": 725.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171121",
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
