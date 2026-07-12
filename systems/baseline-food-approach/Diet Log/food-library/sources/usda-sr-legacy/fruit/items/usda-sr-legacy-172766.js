/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172766",
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
      "gramsPerUnit": 356.0,
      "key": "package-mix-drained-berries",
      "kind": "unit",
      "label": "package, mix + drained berries"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Muffins, blueberry, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 61.0,
    "energy_kcal": 293.0,
    "fat_g": 3.25,
    "fibre_g": 1.4,
    "folate_ug": 53.0,
    "iron_mg": 1.62,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 48.0,
    "protein_g": 3.48,
    "salt_g": 1.1975,
    "sat_fat_g": 1.16,
    "sodium_mg": 479.0,
    "sugar_g": 32.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172766",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
