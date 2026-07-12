/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "0-2-package",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-173764",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "0-2-package",
      "kind": "unit",
      "label": "0.2 package"
    }
  ],
  "name": "Vitasoy USA, Organic Nasoya Silken Tofu",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 1.4,
    "energy_kcal": 47.0,
    "fat_g": 2.5,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 0.9,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 4.8,
    "salt_g": 0.005,
    "sat_fat_g": 0.3,
    "sodium_mg": 2.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173764",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "soy-and-plant-proteins",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
