/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup-1-2-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169965",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-1-2-pieces",
      "kind": "unit",
      "label": "cup 1/2\" pieces"
    }
  ],
  "name": "Beans, snap, green, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 6.41,
    "energy_kcal": 137.0,
    "fat_g": 0.5,
    "fibre_g": 3.4,
    "folate_ug": 47.0,
    "iron_mg": 0.83,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 323.0,
    "protein_g": 2.31,
    "salt_g": 0.0075,
    "sat_fat_g": 0.0,
    "sodium_mg": 3.0,
    "sugar_g": 3.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169965",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "legumes-and-pulses",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
