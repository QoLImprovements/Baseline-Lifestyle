/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708939",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Macaroni or pasta salad, made with light creamy dressing",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 20.2,
    "energy_kcal": 123.0,
    "fat_g": 2.92,
    "fibre_g": 1.6,
    "folate_ug": 49.0,
    "iron_mg": 1.16,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 95.0,
    "protein_g": 3.82,
    "salt_g": 0.525,
    "sat_fat_g": 0.493,
    "sodium_mg": 210.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708939",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
