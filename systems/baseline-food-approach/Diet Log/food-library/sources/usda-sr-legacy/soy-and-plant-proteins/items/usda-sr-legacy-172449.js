/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "0-2-block",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172449",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "0-2-block",
      "kind": "unit",
      "label": "0.2 block"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "0-25-block",
      "kind": "unit",
      "label": "0.25 block"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup-1-2-cubes",
      "kind": "unit",
      "label": "cup (1/2\" cubes)"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "piece-2-1-2-x-2-3-4-x-1",
      "kind": "unit",
      "label": "piece (2-1/2\" x 2-3/4\" x 1\")"
    }
  ],
  "name": "Tofu, soft, prepared with calcium sulfate and magnesium chloride (nigari)",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 1.18,
    "energy_kcal": 61.0,
    "fat_g": 3.69,
    "fibre_g": 0.2,
    "folate_ug": 44.0,
    "iron_mg": 1.11,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 92.0,
    "potassium_mg": 120.0,
    "protein_g": 7.17,
    "salt_g": 0.02,
    "sat_fat_g": 0.533,
    "sodium_mg": 8.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172449",
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
