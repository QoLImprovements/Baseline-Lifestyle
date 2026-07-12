/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "roll",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175033",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Sweet rolls, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 43.7,
    "energy_kcal": 1510.0,
    "fat_g": 18.3,
    "fibre_g": 1.2,
    "folate_ug": 43.0,
    "iron_mg": 0.76,
    "magnesium_mg": 19.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 98.0,
    "potassium_mg": 137.0,
    "protein_g": 7.1,
    "salt_g": 0.8925,
    "sat_fat_g": 6.06,
    "sodium_mg": 357.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 254.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175033",
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
