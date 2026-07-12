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
  "id": "usda-sr-legacy-172767",
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
      "gramsPerUnit": 33.0,
      "key": "muffin-toaster",
      "kind": "unit",
      "label": "muffin, toaster"
    }
  ],
  "name": "Muffins, blueberry, toaster-type",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 53.3,
    "energy_kcal": 1310.0,
    "fat_g": 9.5,
    "fibre_g": 1.8,
    "folate_ug": 65.0,
    "iron_mg": 0.51,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 59.0,
    "potassium_mg": 83.0,
    "protein_g": 4.6,
    "salt_g": 1.0425,
    "sat_fat_g": 1.4,
    "sodium_mg": 417.0,
    "sugar_g": 4.85,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 19.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172767",
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
