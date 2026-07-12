/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174913",
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
      "gramsPerUnit": 29.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, Italian",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 48.1,
    "energy_kcal": 1080.0,
    "fat_g": 2.73,
    "fibre_g": 2.1,
    "folate_ug": 102.0,
    "iron_mg": 3.45,
    "magnesium_mg": 26.0,
    "omega3_g": 0.135,
    "phosphorus_mg": 95.0,
    "potassium_mg": 124.0,
    "protein_g": 9.49,
    "salt_g": 1.545,
    "sat_fat_g": 0.544,
    "sodium_mg": 618.0,
    "sugar_g": 4.69,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174913",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
