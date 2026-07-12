/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707191",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 236.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Huevos rancheros",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 8.85,
    "energy_kcal": 121.0,
    "fat_g": 6.65,
    "fibre_g": 1.7,
    "folate_ug": 25.0,
    "iron_mg": 1.08,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 217.0,
    "protein_g": 6.68,
    "salt_g": 1.045,
    "sat_fat_g": 1.69,
    "sodium_mg": 418.0,
    "sugar_g": 2.26,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707191",
  "state": "Unspecified",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
