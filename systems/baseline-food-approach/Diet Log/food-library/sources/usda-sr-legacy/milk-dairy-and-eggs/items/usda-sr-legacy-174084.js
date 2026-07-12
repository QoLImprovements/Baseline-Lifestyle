/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-55-pieces",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174084",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "serving-55-pieces",
      "kind": "unit",
      "label": "serving 55 pieces"
    }
  ],
  "name": "Crackers, cheese, whole grain",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 57.3,
    "energy_kcal": 412.0,
    "fat_g": 16.0,
    "fibre_g": 6.4,
    "folate_ug": 103.0,
    "iron_mg": 3.46,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 264.0,
    "potassium_mg": 212.0,
    "protein_g": 9.62,
    "salt_g": 1.765,
    "sat_fat_g": 3.21,
    "sodium_mg": 706.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174084",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
