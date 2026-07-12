/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "roll",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172799",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
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
  "name": "Sweet rolls, cinnamon, refrigerated dough with frosting, baked",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 56.1,
    "energy_kcal": 1520.0,
    "fat_g": 13.2,
    "fibre_g": 0.0,
    "folate_ug": 55.0,
    "iron_mg": 2.65,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 348.0,
    "potassium_mg": 63.0,
    "protein_g": 5.4,
    "salt_g": 2.08,
    "sat_fat_g": 3.35,
    "sodium_mg": 832.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172799",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "herbs-spices-and-seasonings"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
