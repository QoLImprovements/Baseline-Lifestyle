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
  "id": "usda-sr-legacy-174297",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "0-2-package",
      "kind": "unit",
      "label": "0.2 package"
    }
  ],
  "name": "Vitasoy USA, Organic Nasoya Super Firm Cubed Tofu",
  "nutritionPerBasis": {
    "calcium_mg": 188.0,
    "carbs_g": 2.8,
    "energy_kcal": 492.0,
    "fat_g": 6.3,
    "fibre_g": 2.0,
    "folate_ug": 0.0,
    "iron_mg": 2.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 12.4,
    "salt_g": 0.015,
    "sat_fat_g": 1.3,
    "sodium_mg": 6.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174297",
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
