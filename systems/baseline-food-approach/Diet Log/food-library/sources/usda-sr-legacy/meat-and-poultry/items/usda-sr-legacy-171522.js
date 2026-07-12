/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171522",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "thigh",
      "kind": "unit",
      "label": "thigh"
    }
  ],
  "name": "Chicken, broilers or fryers, rotisserie, original seasoning, thigh, meat and skin, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.02,
    "energy_kcal": 975.0,
    "fat_g": 15.7,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.97,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 222.0,
    "potassium_mg": 260.0,
    "protein_g": 22.9,
    "salt_g": 0.8625,
    "sat_fat_g": 4.12,
    "sodium_mg": 345.0,
    "sugar_g": 0.02,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171522",
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
