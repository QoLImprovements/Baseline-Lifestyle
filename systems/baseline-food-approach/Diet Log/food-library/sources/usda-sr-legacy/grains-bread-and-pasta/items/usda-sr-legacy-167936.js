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
  "id": "usda-sr-legacy-167936",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Keikitos (muffins), Latino bakery item",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 53.2,
    "energy_kcal": 1950.0,
    "fat_g": 25.2,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 2.53,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 255.0,
    "potassium_mg": 90.0,
    "protein_g": 6.81,
    "salt_g": 1.2875,
    "sat_fat_g": 0.0,
    "sodium_mg": 515.0,
    "sugar_g": 25.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167936",
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
