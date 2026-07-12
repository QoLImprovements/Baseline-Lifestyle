/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Milk shakes and other dairy drinks",
  "id": "usda-fndds-2705503",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-milkshake-10-fl-oz",
      "kind": "unit",
      "label": "1 milkshake (10 fl oz)"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Milk shake, home recipe, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 13.5,
    "energy_kcal": 120.0,
    "fat_g": 6.14,
    "fibre_g": 0.5,
    "folate_ug": 6.0,
    "iron_mg": 0.35,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 103.0,
    "potassium_mg": 187.0,
    "protein_g": 3.47,
    "salt_g": 0.13,
    "sat_fat_g": 3.72,
    "sodium_mg": 52.0,
    "sugar_g": 12.6,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705503",
  "state": "Unspecified",
  "subcategory": "Milk shakes and other dairy drinks",
  "tags": [
    "milk-dairy-and-eggs",
    "milk-shakes-and-other-dairy-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
