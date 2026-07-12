/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.8,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, PROSOBEE, with iron, powder, not reconstituted, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 530.0,
    "carbs_g": 54.6,
    "energy_kcal": 2140.0,
    "fat_g": 27.0,
    "fibre_g": 0.0,
    "folate_ug": 81.0,
    "iron_mg": 9.5,
    "magnesium_mg": 41.0,
    "omega3_g": 0.086,
    "phosphorus_mg": 350.0,
    "potassium_mg": 610.0,
    "protein_g": 12.7,
    "salt_g": 0.4575,
    "sat_fat_g": 11.3,
    "sodium_mg": 183.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 460.0,
    "vitamin_c_mg": 61.0,
    "vitamin_e_mg": 4.6,
    "vitamin_k_ug": 46.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173545",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
