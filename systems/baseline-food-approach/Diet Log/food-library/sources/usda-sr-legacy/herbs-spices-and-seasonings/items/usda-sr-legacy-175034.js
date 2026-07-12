/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "large",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175034",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "roll-2-3-4-square",
      "kind": "unit",
      "label": "roll (2-3/4\" square)"
    }
  ],
  "name": "Sweet rolls, cinnamon, commercially prepared with raisins",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 50.9,
    "energy_kcal": 1560.0,
    "fat_g": 16.4,
    "fibre_g": 2.4,
    "folate_ug": 72.0,
    "iron_mg": 1.6,
    "magnesium_mg": 17.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 76.0,
    "potassium_mg": 111.0,
    "protein_g": 6.2,
    "salt_g": 0.76,
    "sat_fat_g": 3.08,
    "sodium_mg": 304.0,
    "sugar_g": 31.7,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.99,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175034",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
