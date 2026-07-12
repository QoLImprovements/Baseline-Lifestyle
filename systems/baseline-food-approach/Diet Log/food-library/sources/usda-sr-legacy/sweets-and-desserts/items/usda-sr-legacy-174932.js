/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174932",
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
      "gramsPerUnit": 510.0,
      "key": "package-18-oz",
      "kind": "unit",
      "label": "package (18 oz)"
    }
  ],
  "name": "Cake, pudding-type, carrot, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 172.0,
    "carbs_g": 79.2,
    "energy_kcal": 1740.0,
    "fat_g": 9.8,
    "fibre_g": 0.0,
    "folate_ug": 67.0,
    "iron_mg": 1.8,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 247.0,
    "potassium_mg": 169.0,
    "protein_g": 5.1,
    "salt_g": 1.4175,
    "sat_fat_g": 1.47,
    "sodium_mg": 567.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174932",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
