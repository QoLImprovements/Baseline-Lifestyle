/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "0-25-block",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172448",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "0-25-block",
      "kind": "unit",
      "label": "0.25 block"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "0-2-block",
      "kind": "unit",
      "label": "0.2 block"
    }
  ],
  "name": "Tofu, firm, prepared with calcium sulfate and magnesium chloride (nigari)",
  "nutritionPerBasis": {
    "calcium_mg": 201.0,
    "carbs_g": 2.85,
    "energy_kcal": 326.0,
    "fat_g": 4.17,
    "fibre_g": 0.9,
    "folate_ug": 19.0,
    "iron_mg": 1.61,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 121.0,
    "potassium_mg": 148.0,
    "protein_g": 9.04,
    "salt_g": 0.03,
    "sat_fat_g": 0.793,
    "sodium_mg": 12.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172448",
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
