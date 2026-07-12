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
  "id": "usda-sr-legacy-175045",
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
      "gramsPerUnit": 31.0,
      "key": "muffin-toaster",
      "kind": "unit",
      "label": "muffin, toaster"
    }
  ],
  "name": "Muffins, blueberry, toaster-type, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 56.7,
    "energy_kcal": 1390.0,
    "fat_g": 10.1,
    "fibre_g": 1.9,
    "folate_ug": 59.0,
    "iron_mg": 0.54,
    "magnesium_mg": 15.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 192.0,
    "potassium_mg": 88.0,
    "protein_g": 4.9,
    "salt_g": 1.11,
    "sat_fat_g": 1.55,
    "sodium_mg": 444.0,
    "sugar_g": 13.0,
    "vitamin_a_ug": 101.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 20.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175045",
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
