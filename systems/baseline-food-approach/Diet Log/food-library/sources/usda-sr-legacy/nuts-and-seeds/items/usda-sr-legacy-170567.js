/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz-23-whole-kernels",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170567",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz-23-whole-kernels",
      "kind": "unit",
      "label": "oz (23 whole kernels)"
    },
    {
      "gramsPerUnit": 1.2,
      "key": "almond",
      "kind": "unit",
      "label": "almond"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "cup-slivered",
      "kind": "unit",
      "label": "cup, slivered"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "cup-ground",
      "kind": "unit",
      "label": "cup, ground"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Nuts, almonds",
  "nutritionPerBasis": {
    "calcium_mg": 269.0,
    "carbs_g": 21.6,
    "energy_kcal": 2420.0,
    "fat_g": 49.9,
    "fibre_g": 12.5,
    "folate_ug": 44.0,
    "iron_mg": 3.71,
    "magnesium_mg": 270.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 481.0,
    "potassium_mg": 733.0,
    "protein_g": 21.2,
    "salt_g": 0.0025,
    "sat_fat_g": 3.8,
    "sodium_mg": 1.0,
    "sugar_g": 4.35,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 25.6,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170567",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "nut-and-seed-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
