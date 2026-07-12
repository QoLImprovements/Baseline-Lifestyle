/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-175226",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    }
  ],
  "name": "SILK Vanilla soy yogurt (single serving size)",
  "nutritionPerBasis": {
    "calcium_mg": 176.0,
    "carbs_g": 14.7,
    "energy_kcal": 88.0,
    "fat_g": 1.76,
    "fibre_g": 0.6,
    "folate_ug": 0.0,
    "iron_mg": 0.85,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 2.94,
    "salt_g": 0.03,
    "sat_fat_g": 0.0,
    "sodium_mg": 12.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175226",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
