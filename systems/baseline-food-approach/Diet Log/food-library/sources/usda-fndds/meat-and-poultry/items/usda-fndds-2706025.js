/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-medium-drumstick",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706025",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-medium-drumstick",
      "kind": "unit",
      "label": "1 medium drumstick"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-drumstick-ns-as-to-size",
      "kind": "unit",
      "label": "1 drumstick, NS as to size"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-small-drumstick",
      "kind": "unit",
      "label": "1 small drumstick"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup-cooked-diced",
      "kind": "unit",
      "label": "1 cup, cooked, diced"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-large-drumstick",
      "kind": "unit",
      "label": "1 large drumstick"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    }
  ],
  "name": "Chicken drumstick, baked, coated, skin / coating eaten",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 3.98,
    "energy_kcal": 205.0,
    "fat_g": 11.0,
    "fibre_g": 0.2,
    "folate_ug": 12.0,
    "iron_mg": 1.27,
    "magnesium_mg": 21.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 178.0,
    "potassium_mg": 224.0,
    "protein_g": 21.0,
    "salt_g": 1.0975,
    "sat_fat_g": 2.69,
    "sodium_mg": 439.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706025",
  "state": "Baked",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "baked",
    "chicken-whole-pieces",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
