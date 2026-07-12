/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Milk shakes and other dairy drinks",
  "id": "usda-fndds-2705510",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-bottle-12-fl-oz",
      "kind": "unit",
      "label": "1 bottle (12 fl oz)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Milk shake, bottled, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 20.4,
    "energy_kcal": 150.0,
    "fat_g": 6.66,
    "fibre_g": 1.6,
    "folate_ug": 1.0,
    "iron_mg": 0.73,
    "magnesium_mg": 23.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 111.0,
    "potassium_mg": 193.0,
    "protein_g": 3.7,
    "salt_g": 0.2,
    "sat_fat_g": 4.04,
    "sodium_mg": 80.0,
    "sugar_g": 13.4,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705510",
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
