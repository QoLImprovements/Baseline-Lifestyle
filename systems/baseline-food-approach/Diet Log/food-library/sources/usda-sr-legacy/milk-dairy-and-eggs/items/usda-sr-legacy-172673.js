/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172673",
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
      "gramsPerUnit": 40.0,
      "key": "slice-5-x-3-x-1-2",
      "kind": "unit",
      "label": "slice (5\" x 3\" x 1/2\")"
    }
  ],
  "name": "Bread, egg",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 47.8,
    "energy_kcal": 1200.0,
    "fat_g": 6.0,
    "fibre_g": 2.3,
    "folate_ug": 105.0,
    "iron_mg": 3.04,
    "magnesium_mg": 19.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 106.0,
    "potassium_mg": 115.0,
    "protein_g": 9.5,
    "salt_g": 0.95,
    "sat_fat_g": 1.59,
    "sodium_mg": 380.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172673",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
