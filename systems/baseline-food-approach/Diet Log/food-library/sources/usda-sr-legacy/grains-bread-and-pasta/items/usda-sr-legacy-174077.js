/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174077",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Bread, naan, whole wheat, commercially prepared, refrigerated",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 46.2,
    "energy_kcal": 1200.0,
    "fat_g": 6.7,
    "fibre_g": 4.8,
    "folate_ug": 16.0,
    "iron_mg": 1.73,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 188.0,
    "potassium_mg": 185.0,
    "protein_g": 10.2,
    "salt_g": 1.1675,
    "sat_fat_g": 2.91,
    "sodium_mg": 467.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174077",
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
