/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-cup",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bread, stuffing, cornbread, dry mix, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 21.9,
    "energy_kcal": 749.0,
    "fat_g": 8.8,
    "fibre_g": 2.9,
    "folate_ug": 97.0,
    "iron_mg": 0.94,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 62.0,
    "protein_g": 2.9,
    "salt_g": 1.315,
    "sat_fat_g": 1.76,
    "sodium_mg": 526.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 8.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172693",
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
