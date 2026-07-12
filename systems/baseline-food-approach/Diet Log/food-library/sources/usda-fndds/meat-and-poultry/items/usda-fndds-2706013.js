/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-drumstick-ns-as-to-size",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706013",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-drumstick-ns-as-to-size",
      "kind": "unit",
      "label": "1 drumstick, NS as to size"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-medium-drumstick",
      "kind": "unit",
      "label": "1 medium drumstick"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-small-drumstick",
      "kind": "unit",
      "label": "1 small drumstick"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-large-drumstick",
      "kind": "unit",
      "label": "1 large drumstick"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken drumstick, grilled with sauce, skin not eaten",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 7.28,
    "energy_kcal": 172.0,
    "fat_g": 6.62,
    "fibre_g": 0.2,
    "folate_ug": 4.0,
    "iron_mg": 1.02,
    "magnesium_mg": 20.0,
    "omega3_g": 0.017,
    "phosphorus_mg": 162.0,
    "potassium_mg": 245.0,
    "protein_g": 19.4,
    "salt_g": 1.48,
    "sat_fat_g": 1.47,
    "sodium_mg": 592.0,
    "sugar_g": 5.94,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706013",
  "state": "Grilled",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "grilled",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
