/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174938",
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
      "gramsPerUnit": 56.0,
      "key": "piece-1-8-of-8-x-5-3-4-cake",
      "kind": "unit",
      "label": "piece (1/8 of 8\" x 5-3/4\" cake)"
    }
  ],
  "name": "Cake, coffeecake, cinnamon with crumb topping, dry mix, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 52.8,
    "energy_kcal": 1330.0,
    "fat_g": 9.6,
    "fibre_g": 1.2,
    "folate_ug": 48.0,
    "iron_mg": 1.43,
    "magnesium_mg": 18.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 215.0,
    "potassium_mg": 112.0,
    "protein_g": 5.5,
    "salt_g": 1.0525,
    "sat_fat_g": 1.86,
    "sodium_mg": 421.0,
    "sugar_g": 29.5,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174938",
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
