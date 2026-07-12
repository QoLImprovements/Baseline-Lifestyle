/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, 7 products, containing vegetable oil, including Anchor Lighter, Lurpak Lighter, Country Life Lighter and own brand equivalents",
  "id": "cofid-current-17-656",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Butter, spreadable, light (60% fat)",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.8,
    "energy_kcal": 547.0,
    "fat_g": 60.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.25,
    "magnesium_mg": 0.0,
    "omega3_g": 1.93,
    "phosphorus_mg": 15.0,
    "potassium_mg": 26.0,
    "protein_g": 0.5,
    "salt_g": 1.1675,
    "sat_fat_g": 25.7,
    "sodium_mg": 467.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 437.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 8.27,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-656",
  "state": "Unspecified",
  "subcategory": "OA",
  "tags": [
    "oa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
